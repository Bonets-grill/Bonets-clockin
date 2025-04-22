
const employees = [
  { key: "12345", name: "Rancec" },
  { key: "67890", name: "Maikel" },
  { key: "54321", name: "Nahomi" },
  { key: "98765", name: "Dani" },
  { key: "11223", name: "Harold" },
];

exports.handler = async (event, context) => {
  const { key } = event.queryStringParameters;

  const employee = employees.find((emp) => emp.key === key);

  if (employee) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, name: employee.name }),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false }),
    };
  }
};
