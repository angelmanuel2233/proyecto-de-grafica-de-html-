document.addEventListener("DOMContentLoaded", function () {
    // Gráfica de línea
    const lineCtx = document.getElementById("lineChart").getContext("2d");
    new Chart(lineCtx, {
        type: "line",
        data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            datasets: [
                {
                    label: "Usuarios 2024",
                    data: [5000, 5500, 6000, 6200, 6800, 7200, 7500, 8000, 8249, 8500, 8800, 9100],
                    borderColor: "rgb(59, 130, 246)",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    tension: 0.3,
                    fill: true,
                },
                {
                    label: "Usuarios 2023",
                    data: [4000, 4200, 4500, 4800, 5100, 5400, 5600, 5900, 6200, 6500, 6800, 7000],
                    borderColor: "rgb(107, 114, 128)",
                    backgroundColor: "rgba(107, 114, 128, 0.1)",
                    tension: 0.3,
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: "top" },
            },
            scales: { y: { beginAtZero: true } },
        },
    });

    // Gráfica de barras
    const barCtx = document.getElementById("barChart").getContext("2d");
    new Chart(barCtx, {
        type: "bar",
        data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            datasets: [
                {
                    label: "Ingresos 2024 ($)",
                    data: [15000, 16500, 18000, 19500, 21000, 22500, 23000, 24000, 24780, 26000, 27500, 29000],
                    backgroundColor: "rgba(59, 130, 246, 0.8)",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: "top" },
            },
            scales: { y: { beginAtZero: true } },
        },
    });
});
