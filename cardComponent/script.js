let budgetData;
let budgetDataArr;

fetch('http://localhost:3000/budget')
  .then((res) => res.json())
  .then((data) => {
    budgetData = data[0];
    budgetDataArr = Object.values(budgetData);
    console.log(budgetDataArr);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'التكلفة الإجمالية المعتمدة حسب توزيع سقف البرنامج',
          'التكلفة الإجمالية المعتمدة حسب قرار اللجنة الإستراتيجية',
          'مجموع قيمة العقود',
          'إجمالي المنصرف',
        ],
        datasets: [
          {
            label: 'الميزانية',
            data: budgetDataArr,
            backgroundColor: [
              'rgba(0, 102, 94, 1)',
              'rgba(87, 154, 215, 1)',
              'rgba(87, 87, 87, 1)',
              'rgba(225, 219, 219, 1)',
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],

            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (val, index, ticks) {
                return val + ' SAR';
              },
            },
          },
          x:{
            ticks:{
              display:false
            }
          }
        },
      },
    });
  })

  .catch(console.error);
