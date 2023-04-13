import * as nlu from "network-lesson-util";

const addr_input = document.getElementById("addr_input");
const addr_output = document.getElementById("addr_output");
const bits_input = document.getElementById("bits_input");
const bits_output = document.getElementById("bits_output");

addr_input.addEventListener("change", (e) => {
    const addr = nlu.addr_str_to_bits_str(e.target.value);
    bits_output.innerHTML = addr;
    console.log(addr);
}, false);

bits_input.addEventListener("change", (e) => {
    const addr = nlu.bits_str_to_addr_str(e.target.value);
    addr_output.innerHTML = addr;
    console.log(addr);
}, false);