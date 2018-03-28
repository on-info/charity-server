const Education = require('./education');

const addEducation = education => {
  const educationToAdd = new Education(education);
  return educationToAdd.save();
};

const getEducation = () => Education.find({});

module.exports = { addEducation, getEducation };
