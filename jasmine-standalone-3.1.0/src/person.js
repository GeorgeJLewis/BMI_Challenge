
function person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
};

person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};
