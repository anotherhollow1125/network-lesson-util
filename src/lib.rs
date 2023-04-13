mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

/*
#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, network-lesson-util!");
}
*/

struct Bits(Vec<bool>);

impl std::fmt::Display for Bits {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        let mut s = String::new();
        for i in 0..self.0.len() {
            if i > 0 && i % 8 == 0 {
                s.push(' ');
            }
            s.push(if self.0[i] { '1' } else { '0' });
        }
        write!(f, "{}", s)
    }
}

use std::str::FromStr;

impl FromStr for Bits {
    type Err = ();
    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let mut bits = Vec::new();
        for c in s.chars() {
            match c {
                '0' => bits.push(false),
                '1' => bits.push(true),
                _ => continue,
            }
        }
        Ok(Bits(bits))
    }
}

impl Bits {
    fn to_addr_str(&self) -> String {
        if self.0.len() != 32 {
            return "Invalid bits".to_string();
        }

        let mut octet_strs = Vec::new();
        for i in 0..4 {
            let mut octet = 0;
            for j in 0..8 {
                octet += if self.0[i*8+j] { 1 << (7-j) } else { 0 };
            }
            octet_strs.push(octet.to_string());
        }
        octet_strs.join(".")
    }
}

pub struct Cidr {
    addr: Bits,
    mask: usize,
}

impl Cidr {
    fn new_from_str(addr: &str) -> Option<Cidr> {
        let mut parts = addr.split('/');
        let Some(addr) = parts.next() else { return None };
        let Some(mask) = parts.next() else { return None };
        let Ok(mask) = mask.parse::<usize>() else { return None };
        let Ok(bits) = addr2bits(addr) else { return None };
        Some(Cidr {
            addr: bits,
            mask,
        })
    }

    pub fn capture(&self, bits: &[bool]) -> bool {
        for i in 0..self.mask {
            if self.addr.0[i] != bits[i] {
                return false;
            }
        }
        true
    }
}

impl std::fmt::Display for Cidr {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        let a = self.addr.to_string();
        write!(f, "{}{}", &a[..self.mask], "_".repeat(32-self.mask))
    }
}

fn addr2bits(addr: &str) -> Result<Bits, ()> {
    let mut bits = Vec::new();
    for octet in addr.split('.') {
        let octet = octet.parse::<u8>().map_err(|_| ())?;
        for i in 0..8 {
            bits.push(octet & (1 << (7 - i)) != 0);
        }
    }
    Ok(Bits(bits))
}

#[wasm_bindgen]
pub fn addr_str_to_bits_str(addr: &str) -> String {
    let Ok(bits) = addr2bits(addr) else {
        return "Invalid address".to_owned();
    };
    bits.to_string()
}

#[wasm_bindgen]
pub fn cidr_str_to_bits_str(cidr: &str) -> String {
    Cidr::new_from_str(cidr).and_then(|c| Some(c.to_string())).unwrap_or("Invalid cidr".to_owned())
}

#[wasm_bindgen]
pub fn bits_str_to_addr_str(bits: &str) -> String {
    Bits::from_str(bits).and_then(|b| Ok(b.to_addr_str())).unwrap_or("Invalid bits".to_owned())
}

/*
fn main() {
    let targets = vec![
        "135.46.63.11",
        "135.46.57.15",
        "135.46.53.3",
        "192.53.40.8",
        "192.53.56.8",
    ].into_iter().map(|s| addr2bits(s)).collect::<Vec<_>>();

    let cidrs = vec![
        ("135.46.56.0/22", "Interface 0"),
        ("135.46.60.0/22", "Interface 1"),
        ("192.53.40.0/23", "Router 1"),
    ].into_iter().map(|s| (Cidr::new_from_str(s.0).unwrap(), s.1.to_string())).collect::<Vec<_>>();

    for target in targets {
        println!("target : {}", target);
        match target {
            b if cidrs[0].0.capture(&b.0) => println!("capture: {} => {}", cidrs[0].0, cidrs[0].1),
            b if cidrs[1].0.capture(&b.0) => println!("capture: {} => {}", cidrs[1].0, cidrs[1].1),
            b if cidrs[2].0.capture(&b.0) => println!("capture: {} => {}", cidrs[2].0, cidrs[2].1),
            _ => println!("default: => Router 2"),
        }
    }
}
*/