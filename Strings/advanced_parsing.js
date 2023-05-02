function parseAndDisplayName(userName) {
    const nameParts = userName.trim().split(" ");
  
    const firstName = nameParts[0];
    const middleName = nameParts.length === 3 ? nameParts[1] : "N/A";
    const lastName = nameParts[nameParts.length - 1];
  
    console.log("Name:", userName);
    console.log("First name:", firstName);
    console.log("Middle name:", middleName);
    console.log("Last name:", lastName);
    console.log("-".repeat(20));
  }
  
  
  parseAndDisplayName("Cher");
  parseAndDisplayName("Brenda Kaye");
  parseAndDisplayName("Dana Lynn Wyatt");