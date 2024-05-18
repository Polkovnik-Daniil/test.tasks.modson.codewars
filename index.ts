function ip_to_int32(ip: string) {
  return ip.split(".").reduce((int, v) => 256 * int + Number(v), 0);
}
console.log(ip_to_int32("128.32.10.1"));
