const fs = require("fs");

function copy(src, dst) {
	const file = fs.readFileSync(src, "utf8");
	fs.writeFileSync(dst, file);
	console.log("copy成功");
}
function copyBigFile(src, dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv) {
	// copy(argv[0], argv[1]);
	copyBigFile(argv[0], argv[1]);
}
main(process.argv.slice(2));
