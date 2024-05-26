const startDate = new Date('2024-05-20');
      
          
const today = new Date();
const timeDiff = today - startDate;
const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


const containerNumber = (dayDiff % 12) + 1; 


document.getElementById(`container${containerNumber}`).style.display = 'block';