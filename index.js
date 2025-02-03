


  function calculateAge()
                          {
                            const dobInput = document.getElementById("dob").value;
                            const resultDiv = document.getElementById("result");

                            if (!dobInput) 
                            {
                              resultDiv.innerText = "Please select your date of birth.";
                              return;
                            }

                            const dob = new Date(dobInput);
                            const today = new Date();

                            let age = today.getFullYear() - dob.getFullYear();
                            const monthDifference = today.getMonth() - dob.getMonth();
                            const dayDifference = today.getDate() - dob.getDate();

                            if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0))
                            {
                              age--;
                            }
                          
                            resultDiv.innerText = `You are ${age} years Old.`;
                          }
                            function clearDOB() {
                              document.getElementById("dob").value = "";        // Clear the date input
                              document.getElementById("result").innerText = ""; // Clear the age result
                            }
                          
    
