import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'noValue';
  firstNumb: number = 0;
  secondNumb: number = 0;
  stringFunc: string = 'NoFunction';
  lastFunc: string = 'NoFunction';

  onClickValue(val: string, type: any) {
    if (type == 'function') {
      this.onFunctionClick(val);
    }
    if (type == 'number') {
      this.onNumberClick(val);
    }
  }


  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }


  onFunctionClick(val: string) {
    if (this.funcT == 'NoFunction') {
      if (val == 'c') {
        this.clearAll();
      } else {
        this.firstNumb = this.calValue;
        this.calValue = 0;
        this.calNumber = 'noValue';
        this.funcT = val;
        this.stringFunc = this.firstNumb.toString() + val;
      }
    } else if (this.funcT != 'NoFunction') {
      if(val != this.funcT){
        this.secondNumb = this.calValue
      }
      this.valueCalculate(val)
    }

  }
  valueCalculate(val: string) {
    var total;
    switch (val) {
      case 'c':
        this.clearAll();
        break;
      case '%':
        total = this.firstNumb % this.secondNumb;
        this.totalAsignValues(total, val);
        break;
      case '-':
        total = this.firstNumb - this.secondNumb;
        this.totalAsignValues(total, val);
        break;
      case '+':
        total = this.firstNumb + this.secondNumb;
        this.totalAsignValues(total, val);
        break;
      case '*':
        total = this.firstNumb * this.secondNumb;
        this.totalAsignValues(total, val);
        break;
      case '/':
        total = this.firstNumb / this.secondNumb;
        this.totalAsignValues(total, val);
        break;
      case '=':
        if(this.funcT != '='){
          this.valueCalculate(this.funcT);
        }else{
          this.clearAll()
        }
        this.funcT = '=';
      //this.totalAsignValues(total,'NoFunction')
    }
  }
  

  totalAsignValues(total: number, val: string) {
    this.stringFunc = this.firstNumb.toString() + val + this.secondNumb.toString();
    this.funcT = val;
    this.firstNumb = total;
    this.calValue = total;
    this.calNumber = 'noValue';
  }

  clearAll() {
    this.funcT = 'NoFunction';
    this.stringFunc = this.funcT;
    this.firstNumb = 0;
    this.calValue = 0;
    this.calNumber = 'noValue';
    this.secondNumb = 0;
  }
}
