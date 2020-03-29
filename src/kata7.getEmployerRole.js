const getEmployerRole = employeeName => {
  const employees = [
    {
      name: "Satti",
      role: "Developer"
    },
    {
      name: "Jenny",
      role: "Sales Associate"
    },
    {
      name: "Javid",
      role: "Human Recommended Reading Assistant"
    }
  ];
  return employees.find(employee => employee.name === employeeName).role;
};

module.exports = getEmployerRole;
