const chai = require("chai");
const expect = chai.expect;
const conversor = require("../index");

describe("conversor lib", () => {
  describe("numberRomanToArabic", () => {
    it("converte C número romano para 100 número arábico", () => {
      expect(conversor.numberRomanToArabic("C")).to.equal(100);  
    });
    it("converte CD número romano para 400 número arábico", () => {
      expect(conversor.numberRomanToArabic("CD")).to.equal(400);
    });
    it("converte mdcxcix número romano para 1699 número arábico", () => {
      expect(conversor.numberRomanToArabic("mdcxcix")).to.equal(1699);
    });
    it("converte -iv número romano para 4000 número arábico", () => {
      expect(conversor.numberRomanToArabic("-iv")).to.equal(4000);
    });
    it("converte -D número romano para 500.000 número arábico", () => {
      expect(conversor.numberRomanToArabic("-D")).to.equal(500000);
    });
    it("converte -DCXX número romano para 500.000 número arábico", () => {
      expect(conversor.numberRomanToArabic("-Dcxx")).to.equal(500120);
    });
    it("converte DXXI número romano para 521 número arábico", () => {
      expect(conversor.numberRomanToArabic("dxxi")).to.equal(521);
    });
    it("converte -M-D-X-X-MMM número romano para 1523000 número arábico", () => {
      expect(conversor.numberRomanToArabic("-m-d-x-xmmm")).to.equal(1523000);
    });
    it("informa que o valor digitado não é um número romano", () => {
      let notRoman = () => conversor.numberRomanToArabic("")
      expect(notRoman).to.throw("Não é um número romano!")
    });
    it("informa que o valor digitado não é um número romano", () => {
      let notRoman = () => conversor.numberRomanToArabic(1234)
      expect(notRoman).to.throw("Não é um número romano!")
    });
});
});

describe("conversor lib", () => {
  describe("numberArabicToRoman", () => {
    it("converte 120 número arábico para CXX número romano", () => {
      expect(conversor.numberArabicToRoman(120)).to.equal("CXX");
    });
    it("converte 600 número arábico para DC número romano", () => {
      expect(conversor.numberArabicToRoman(600)).to.equal("DC");
    });
    it("converte 2345 número arábico para MMCCCXLV número romano", () => {
      expect(conversor.numberArabicToRoman(2345)).to.equal("MMCCCXLV");
    });
    it("converte 3000 número arábico para MMM número romano", () => {
      expect(conversor.numberArabicToRoman(3000)).to.equal("MMM");
    });
    it("converte 10005 número arábico para -xv número romano", () => {
      expect(conversor.numberArabicToRoman(10005)).to.equal("-XV");
    });
    it("converte 96 número arábico para XCVI número romano", () => {
      expect(conversor.numberArabicToRoman(96)).to.equal("XCVI");
    });
    it("converte 5 número arábico para V número romano", () => {
      expect(conversor.numberArabicToRoman(5)).to.equal("V");
    });
    it("converte 235 número arábico para CCXXXV número romano", () => {
      expect(conversor.numberArabicToRoman(235)).to.equal("CCXXXV");
    });
    it("informa que o valor em branco não é um número arábico", () => {
      let notArabc = () => conversor.numberArabicToRoman("")
      expect(notArabc).to.throw("Não é um número arábico!")
    });
    it("informa que o valor digitado não é um número arábico", () => {
      let notArabc = () => conversor.numberArabicToRoman("XCV")
      expect(notArabc).to.throw("Não é um número arábico!")
    });
  });
});