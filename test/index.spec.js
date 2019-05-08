const chai = require("chai");
const expect = chai.expect;
const conversor = require("../index");

describe("conversor lib", () => {
  describe("romanToInt", () => {
    it("converte C número romano para 100 número arábico", () => {
      expect(conversor.romanToInt("C")).to.equal(100);  
    });
    it("converte CD número romano para 400 número arábico", () => {
      expect(conversor.romanToInt("CD")).to.equal(400);
    });
    it("converte mdcxcix número romano para 1699 número arábico", () => {
      expect(conversor.romanToInt("mdcxcix")).to.equal(1699);
    });
    it("converte ˉiv número romano para 4000 número arábico", () => {
      expect(conversor.romanToInt("ˉiv")).to.equal(4000);
    });
    it("converte ˉD número romano para 500.000 número arábico", () => {
      expect(conversor.romanToInt("ˉD")).to.equal(500000);
    });
    it("converte ˉDCXX número romano para 500.000 número arábico", () => {
      expect(conversor.romanToInt("ˉDcxx")).to.equal(500120);
    });
    it("converte DXXI número romano para 521 número arábico", () => {
      expect(conversor.romanToInt("dxxi")).to.equal(521);
    });
    it("converte ˉMˉDˉXˉXˉMMM número romano para 1523000 número arábico", () => {
      expect(conversor.romanToInt("ˉmˉdˉxˉxmmm")).to.equal(1523000);
    });
    it("informa que o valor digitado não é um número romano", () => {
      let notRoman = () => conversor.romanToInt("")
      expect(notRoman).to.throw("Não é um número romano!")
    });
    it("informa que o valor digitado não é um número romano", () => {
      let notRoman = () => conversor.romanToInt(1234)
      expect(notRoman).to.throw("Não é um número romano!")
    });
});
});

describe("conversor lib", () => {
  describe("intToRoman", () => {
    it("converte 120 número arábico para CXX número romano", () => {
      expect(conversor.intToRoman(120)).to.equal("CXX");
    });
    it("converte 600 número arábico para DC número romano", () => {
      expect(conversor.intToRoman(600)).to.equal("DC");
    });
    it("converte 2345 número arábico para MMCCCXLV número romano", () => {
      expect(conversor.intToRoman(2345)).to.equal("MMCCCXLV");
    });
    it("converte 3000 número arábico para MMM número romano", () => {
      expect(conversor.intToRoman(3000)).to.equal("MMM");
    });
    it("converte 10005 número arábico para ˉxv número romano", () => {
      expect(conversor.intToRoman(10005)).to.equal("ˉXV");
    });
    it("converte 96 número arábico para XCVI número romano", () => {
      expect(conversor.intToRoman(96)).to.equal("XCVI");
    });
    it("converte 5 número arábico para V número romano", () => {
      expect(conversor.intToRoman(5)).to.equal("V");
    });
    it("converte 235 número arábico para CCXXXV número romano", () => {
      expect(conversor.intToRoman(235)).to.equal("CCXXXV");
    });
    it("informa que o valor em branco não é um número arábico", () => {
      let notArabc = () => conversor.intToRoman("")
      expect(notArabc).to.throw("Não é um número arábico!")
    });
    it("informa que o valor digitado não é um número arábico", () => {
      let notArabc = () => conversor.intToRoman("XCV")
      expect(notArabc).to.throw("Não é um número arábico!")
    });
  });
});