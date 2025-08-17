
import DataTable from "./components/DataTable";
import InputField from "./components/InputField";


export default function Home() {

    const columns = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "email", label: "Email" },
    { key: "city", label: "City" },
    { key: "phone", label: "Phone" },
  ];

  const data = [
    { name: "Alice", age:20, email: 'alice@gmail.com', city: 'London', phone: '123456789'},
    { name: "Bob", age: 25, email: 'bob@gmail.com', city: 'Paris', phone: '987654321'},
    { name: "Charlie", age: 30, email: 'charlie@gmail.com', city: 'Berlin', phone: '456789123'},
    { name: 'Saptarshi', age: 40, email: 'saptarshimondal.mail@gmail.com', city: 'Kolkata', phone: '9091906008'}
  ];

  return (
   <div>
    <main className="w-full h-screen flex flex-col justify-evenly items-center">
      <InputField
       label="This is Input Field"
       placeholder="Here is your text"
       variant="outlined"
       size="md"
       invalid={false}
       disabled={false}
       loading={false}
       errorMessage="This is Error Message"
       helperText="Please enter a valid input"
        />
        <DataTable data={data} columns={columns} loading={false} />
    </main>
   </div>
  );
}
