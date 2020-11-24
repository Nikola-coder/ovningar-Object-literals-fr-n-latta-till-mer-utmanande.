// 1. Börja med att skapa en skola som ett objekt. Objektet ska existera innuti en variabel som ni namnger med skolans namn för att göra det simpel. Skolan ska innehålla egenskaperna: name, address, zipcode, city, students med värdet av en tom array och teachers som en tom array. Till exempel:

// 2. Skapa tre stycken olika ämnen, varje ämne ska vara ett objekt med en variabel motsvarande namnet på ämnet. Egenskaperna ska vara name, students som en tom array och teacher som ett tomt objekt. Till Exempel:

// 3. Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. Egenskaperna ska vara name, age, gender och subjects som en tom array.

// 4. Skapa två stycken lärare med namnet som variabel och egenskaperna name och subjects som en tom array.

// 5. Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen ut både läraren och ämnet du valde i konsolen och inspektera dem. Resonera, hur kan man använda den datan ur ett admins perspektiv på en skola, och tycker du den är komplett? Vad saknas?

// 6. Lägg till en student i ett ämnes studentarray. Skriv ut och inspektera i konsolen.

let medieinstitutet = {
    name: "medieinstitutet",
    address: [],
    zipcode: [],
    city: [],
    students: [],
    teachers: [],
};

let matematik = {
    name: [],
    students: [],
    teachers: {},
};

matematik.students.push("stella")

let kemi = {
    name: [],
    students: [],
    teachers: {},
};

let fysik = {
    name: [],
    students: [],
    teachers: {},
};

let niklas = {
    name: [],
    age: [],
    gender: [],
    subjects: [],
};

let aleksandar = {
    name: [],
    age: [],
    gender: [],
    subjects: [],
};

let peter = {
    name: [],
    age: [],
    gender: [],
    subjects: [],
};

let melissa = {
    name: [],
    age: [],
    gender: [],
    subjects: [],
};

let stella = {
    name: [],
    age: [],
    gender: [],
    subjects: [],
};

let teacherFredrik = {
    name: [],
    subjects: [],

    addSubjectToTeacher: function (teacherFredrik){
      this.name.push("matematik")
      teacherFredrik.name.push(this)

      return this;
    }
};

let teacherBenjamin = {
    name: [],
    subjects: [],
};

teacherBenjamin.subjects.push("matematik") 
teacherBenjamin.subjects.unshift("fysik")



// 7. För att lösa problematiken i de två senaste uppgifterna så bör man i sådana här fall lägga till kopplingen i båda objekten. Alltså vi börjar med att lägga till ett ämne i en lärarens ämnesarray, och sen byter vi ut det tomma lärarobjekten i ämnet mot läraren. Då har vi en referens på båda sidorna. Skapa nu en funktion som heter addSubjectToTeacher som tar emot ett ämne och en lärare, och parar ihop dessa. Returnera sen läraren så du kan se förändringen i lärarens ämnesarray.