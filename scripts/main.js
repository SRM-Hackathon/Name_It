

const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, description, medical_speciality, sample_name, transcription, previousHash = "") {
        this.index = index;
        this.description = description;
        this.medical_speciality = medical_speciality;
        this.sample_name = sample_name;
        this.transcription = transcription;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.transcription + this.sample_name);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(1, "Consult for laparoscopic gastric bypass.", "Bariatrics", "Laparoscopic Gastric Bypass Consult - 2", "He has difficulty climbing stairs, difficulty with airline seats, tying shoes, used to public seating, and lifting objects off the floor.", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

let  data = new Blockchain();
data.addBlock(new Block(2, "Consult for laparoscopic gastric bypass.", "Bariatrics", "Laparoscopic Gastric Bypass Consult - 1", "He has difficulty climbing stairs, difficulty with airline seats, tying shoes, used to public seating, difficulty walking, high cholesterol, and high blood pressure.  He has asthma and difficulty walking two blocks or going eight to ten steps."));
data.addBlock(new Block(3, "2-D M-Mode. Doppler.", "Cardiovascular / Pulmonary", "2-D Echocardiogram - 1", "Left atrial enlargement with left atrial diameter of 4.7 cm. Normal size right and left ventricle. Normal LV systolic function with left ventricular ejection fraction of 51%."));
data.addBlock(new Block(4, "2-D Echocardiogram", "Cardiovascular / Pulmonary", "2-D Echocardiogram - 2", "The left ventricular cavity size and wall thickness appear normal. The wall motion and left ventricular systolic function appears hyperdynamic with estimated ejection fraction of 70% to 75%. There is near-cavity obliteration seen."));
data.addBlock(new Block(5, " Morbid obesity.", "Bariatrics", "Laparoscopic Gastric Bypass", "Overweight for many years. She has tried many different diets, but is unsuccessful. Received some handouts, and signed the consent. The risks and benefits of the procedure have been explained to the patient."))

var myJSON = JSON.stringify(data, null, 4);
console.log(data.chain[1].hash);
console.log(data.isChainValid());
// var bodyParser = require('body-parser');
// var express = require('express');
// var app = express();




