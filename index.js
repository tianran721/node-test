const fs = require("fs");

function copy(src, dst) {
	const file = fs.readFileSync(src, "utf8");
	fs.writeFileSync(dst, file);
	console.log("copy成功");
}

function main(argv) {
	copy(argv[0], argv[1]);
}
main(process.argv.slice(2));
