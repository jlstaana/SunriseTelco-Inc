document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-test');
    const downloadSpeed = document.getElementById('download-speed');
    const uploadSpeed = document.getElementById('upload-speed');
    const ping = document.getElementById('ping');
    const statusText = document.getElementById('test-status');
    const progressRings = document.querySelectorAll('.progress-ring-progress');

    // Set up progress rings
    progressRings.forEach(circle => {
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
    });

    function setProgress(circle, percent) {
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    function getRandomSpeed(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function simulateSpeedTest() {
        let progress = 0;
        startButton.disabled = true;
        
        // Reset values
        downloadSpeed.textContent = '0';
        uploadSpeed.textContent = '0';
        ping.textContent = '0';
        progressRings.forEach(ring => setProgress(ring, 0));

        // Simulate ping test
        statusText.textContent = 'Testing ping...';
        setTimeout(() => {
            ping.textContent = Math.floor(Math.random() * 15 + 5); // 5-20ms ping
            
            // Simulate download test
            statusText.textContent = 'Testing download speed...';
            let downloadInterval = setInterval(() => {
                progress += 2;
                const speed = getRandomSpeed(500, 1000); // 500-1000 Mbps
                downloadSpeed.textContent = speed;
                setProgress(progressRings[0], progress);
                
                if (progress >= 100) {
                    clearInterval(downloadInterval);
                    progress = 0;
                    
                    // Simulate upload test
                    statusText.textContent = 'Testing upload speed...';
                    let uploadInterval = setInterval(() => {
                        progress += 2;
                        const speed = getRandomSpeed(400, 800); // 400-800 Mbps
                        uploadSpeed.textContent = speed;
                        setProgress(progressRings[1], progress);
                        
                        if (progress >= 100) {
                            clearInterval(uploadInterval);
                            statusText.textContent = 'Speed test completed!';
                            startButton.disabled = false;
                        }
                    }, 50);
                }
            }, 50);
        }, 1000);
    }

    startButton.addEventListener('click', simulateSpeedTest);
});
