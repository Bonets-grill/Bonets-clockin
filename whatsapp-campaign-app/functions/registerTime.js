
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { key, action } = event.queryStringParameters;
  const employees = [
    { key: "12345", name: "Rancec" },
    { key: "67890", name: "Maikel" },
    { key: "54321", name: "Nahomi" },
    { key: "98765", name: "Dani" },
    { key: "11223", name: "Harold" },
  ];

  const employee = employees.find((emp) => emp.key === key);

  if (!employee) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Empleado no encontrado" }),
    };
  }

  const message = `Empleado ${employee.name} ha registrado su ${action} a las ${new Date().toLocaleString()}`;

  // Enviar mensaje al grupo de WhatsApp
  await fetch("https://api.whatsapp.com/send?phone=+1234567890&text=" + encodeURIComponent(message), {
    method: "GET",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Registro de ${action} realizado con éxito.` }),
  };
};
