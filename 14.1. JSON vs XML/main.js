// ! ЗАДАЧА 1

const parser = new DOMParser();

const xmlString = `
    <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>
`
const xmlDOM = parser.parseFromString(xmlString, "text/xml");


const studentNodes = xmlDOM.querySelector("student")

for (let studentNode in studentNodes) {

    const nameNode = studentNodes.querySelector("name");
    const firstNameNode = studentNodes.querySelector("first");
    const secondNameNode = studentNodes.querySelector("second");
    const ageNode = studentNodes.querySelector("age");
    const profNode = studentNodes.querySelector("prof");

    const langAttr = nameNode.getAttribute('lang');

    const studName = `${firstNameNode.textContent} ${secondNameNode.textContent}`

    console.log(studName)
}
// console.log('firstNameNode', firstNameNode);
// console.log('secondNameNode', secondNameNode);
// console.log('ageNode', ageNode);
// console.log('profNode', profNode);
// console.log('langAttr', langAttr);

const result_1 = {
    name: studName,
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: langAttr,
};
console.log(result_1);




// ! ЗАДАЧА 2 

const jsonString = `
{
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
        ]
    }
`;
// console.log('jsonString', jsonString);

const data = JSON.parse(jsonString);

// console.log('data', data);

const list = data.list;

// console.log('student', student);

const result_2 = {
    name: list.name,
    age: list.age,
    prof: list.prof,
};
console.log('result_2', result_2)
