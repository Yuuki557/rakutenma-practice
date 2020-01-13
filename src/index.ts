import * as fs from "fs";
import * as RakutenMA from "rakutenma";
import {WordClassMapper, JpWordClassMapper, ZhWordClassMapper} from "./mapper";

// demo()

const a = readFile("test-data/text_jp.txt");
console.log(a.length)

type Word = string;
type WordClass = string;
type Token = [Word, WordClass];

function demo() {
	const mapper: WordClassMapper = new JpWordClassMapper();

	// Rakuten MA インスタンスを、学習済みモデルを使って初期化
	var model = JSON.parse(readFile("model/model_ja.json"));
	const rma = new RakutenMA(model, 1024, 0.007812);  // SCW のハイパーパラメータを指定
	rma.featset = RakutenMA.default_featset_ja;
	
	// 素性ハッシング関数 (15bit) を指定
	rma.hash_func = RakutenMA.create_hash_func(15);
	
	
	const start = new Date();
	// const inputText: string = readFile("text_jp/1_text.txt");
	const inputText: string = readFile("test-data/text_jp.txt");
	divider(inputText, 100).forEach(
		(text) => {
			const token: Token[] = rma.tokenize(text);
			token.map((elem: Token) => {
				const word = elem[0];
				const wordClassIdentifer = elem[1];
				return [word, mapper.map(wordClassIdentifer)];
			});
			const end = new Date();
			console.log((end.getTime() - start.getTime()).toLocaleString() + "秒");
		}
	)
}

function readFile(fileName: string): string{
	return fs.readFileSync(fileName).toString();
}

function divider(text: string, interval: number): string[] {
	const texts: string[] = [];
	let a = "1";
	let start = 0;
	while (a.length !== 0) {
		a = text.substring(start, start + interval);
		texts.push(a)
		start += interval;
	}
	return texts;
}

function writer(folderName: string, texts: string[]) {
	if (!fs.existsSync(folderName)) {
		fs.mkdirSync(folderName);
	}

	texts.forEach((text, i) => {
		const fileName = (i + 1) + "_text.txt";
		fs.writeFileSync(`${folderName}/${fileName}`, text);
	});
}
