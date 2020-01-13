export interface WordClassMapper {
	map(identifer: string): string;
}

export class JpWordClassMapper implements WordClassMapper{
	private readonly table: {[key: string]: string} = {
		"A-c": "形容詞-一般",
		"A-dp": "形容詞-非自立可能",
		"C": "接続詞",
		"D":	"代名詞",
		"E":	"英単語",
		"F":	"副詞",
		"I-c":	"感動詞-一般",
		"J-c":	"形状詞-一般",
		"J-tari":	"形状詞-タリ",
		"J-xs":	"形状詞-助動詞語幹",
		"M-aa":	"補助記号-AA",
		"M-c":	"補助記号-一般",
		"M-cp":	"補助記号-括弧閉",
		"M-op":	"補助記号-括弧開",
		"M-p":	"補助記号-句点",
		"N-n":	"名詞-名詞的",
		"N-nc":	"名詞-普通名詞",
		"N-pn":	"名詞-固有名詞",
		"N-xs":	"名詞-助動詞語幹",
		"O":	"その他",
		"P":	"接頭辞",
		"P-fj":	"助詞-副助詞",
		"P-jj":	"助詞-準体助詞",
		"P-k":	"助詞-格助詞",
		"P-rj":	"助詞-係助詞",
		"P-sj":	"助詞-接続助詞",
		"Q-a":	"接尾辞-形容詞的",
		"Q-j":	"接尾辞-形状詞的",
		"Q-n":	"接尾辞-名詞的",
		"Q-v":	"接尾辞-動詞的",
		"R":	"連体詞",
		"S-c":	"記号-一般",
		"S-l":	"記号-文字",
		"U":	"URL",
		"V-c":	"動詞-一般",
		"V-dp":	"動詞-非自立可能",
		"W":	"空白",
		"X":	"助動詞",
	}

	public map(identifer: string): string {
		return transfer.bind(this)(identifer);
	}
}

export class ZhWordClassMapper implements WordClassMapper {
	private readonly table: {[key: string]: string} = {
		"AD":	"副词",
		"AS":	"纵横粒子",
		"BA":	"ba3（在ba结构中）",
		"CC":	"并列连词",
		"CD":	"基数",
		"CS":	"从属连词",
		"DEC":	"de5（补语/名词化）",
		"DEG":	"de5 （整体/联想）",
		"DER":	"de5 （结果）",
		"DEV":	"de5 （方式）",
		"DT":	"确定者",
		"ETC":	"其他",
		"FW":	"外来词",
		"IJ":	"欹",
		"JJ":	"其他名词修饰语",
		"LB":	"bei4（在长bei建设中）",
		"LC":	"定位器",
		"M":	"量词",
		"MSP":	"其他粒子",
		"NN":	"其他名词",
		"NN-SHORT":	"其他名词（缩写）",
		"NR":	"专有名词",
		"NR-SHORT":	"专有名词（缩写）",
		"NT":	"时态名词",
		"NT-SHORT":	"时态名词（缩写）",
		"OD":	"序数词",
		"ON":	"拟声词",
		"P":	"介词",
		"PN":	"代词",
		"PU":	"标点",
		"SB":	"bei4（简称bei-construction）",
		"SP":	"句末词",
		"URL":	"网址",
		"VA":	"谓语形容词",
		"VC":	"系词",
		"VE":	"you3（主要动词）",
		"VV":	"其他动词",
		"X":	"其他",
	}

	public map(identifer: string): string {
		return transfer.bind(this)(identifer);
	}
}

function transfer(identifer: string): string {
	const wordClass = this.table[identifer];
	return wordClass ? wordClass : "?";
}