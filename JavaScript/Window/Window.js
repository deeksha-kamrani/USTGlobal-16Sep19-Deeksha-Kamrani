// console.log('Window object',window);
// console.log('This Keyword',this);
// console.log(this === window);

// window.alert('Welcome to JavaScript Class');
// alert('Welcome to UST Global and Test Yantra');

// let confirmDelete = confirm('Are you sure you want to delete');
// console.log('Confirm Delete',confirmDelete);

// let userName = prompt('What is your name','Deeksha');
// console.log('User Name',userName);

const person = {
    Firstname : 'Alia',
    age : 23,
    Lastname : 'Kapoor',
    getName : function(){
        console.log('This keyword ',this);
        return this.Firstname + ' ' + this.Lastname
    }
}
let fullName = person.getName();
console.log('Full Name =',fullName);