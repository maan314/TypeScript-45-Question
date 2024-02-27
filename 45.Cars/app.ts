type car = {
  manufacturer: string;
  model: string;
  color?: string;
  year?: number;
  Boost?:boolean;
}

function create_car(manufacturer: string, model: string, options?: car): car {
  return{
    manufacturer,
    model,
    ...options
  }
}

let myCar: car = create_car('Unknown', 'Unknown', { manufacturer: 'Toyota', model: 'Supra', color: 'White', year: 2016, Boost:true });
console.log('Car Information:', myCar);
