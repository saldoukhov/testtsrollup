import {dep1fn} from "./dep1"
import {dep2fn} from "./dep2";

export function main(): string {
    console.log(dep1fn());
    console.log(dep2fn());
    return "main";
}