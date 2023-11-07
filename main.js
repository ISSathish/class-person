class Person{
	constructor(name,age,country){
		this.name=name;
		this.age=age;
		this.country=country;
	}
display(){
	console.log(`Hi My name is ${this.name} from ${this.country}`)
}
}
let ans=new Person("sathish",18,"India")
let ans2=new Person("siva",18,"India")
ans.display()
ans2.display();;