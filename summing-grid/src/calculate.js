export default function calculate(total){
  let _return;
  if(total < 100000){
    _return = total.toString();
  } else if(total < 1000000){
    _return = `${Math.round(total/1000)}K`;
  } else if(total <= 10000000){
    _return = `${(total/1000000).toFixed(2)}M`;
  } 
  return (_return !== undefined ? _return : -1);
}
