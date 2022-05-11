const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/harshitkart');
  // console.log("we are connected bro/sis..");
  
await harshitKitty.save();
harshitKitty.speak();
await harshitKitty2.save();
harshitKitty.speak();

// const kittens = await Kitten.find();
// console.log(kittens);
await Kitten.find({ name: harshitKitty });


}

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
  const greeting = "My name is "+this.name;
  
  console.log(greeting);
};



const Kitten = mongoose.model('harshitKitty', kittySchema);
const harshitKitty = new Kitten({ name: 'harshitKitty' });
const harshitKitty2 = new Kitten({ name: 'harshitKitty2' });
console.log(harshitKitty.name);







