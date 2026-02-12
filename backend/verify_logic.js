const http = require('http');

const makeRequest = (ip) => {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 4000,
            path: '/api/visitors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Forwarded-For': ip
            }
        };

        const req = http.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        });

        req.on('error', reject);
        req.end();
    });
};

const runTest = async () => {
    console.log('Starting Logic Verification...');

    // 1. Simulate First Visitor (IP: 1.1.1.1)
    const res1 = await makeRequest('1.1.1.1');
    console.log('Visitor 1 (1.1.1.1):', res1);

    // 2. Simulate Same Visitor (IP: 1.1.1.1) - Should NOT increment
    const res2 = await makeRequest('1.1.1.1');
    console.log('Visitor 1 again (1.1.1.1):', res2);

    if (res1.count === res2.count) {
        console.log('✅ Deduplication works: Count did not increase for same IP.');
    } else {
        console.error('❌ Deduplication failed: Count increased for same IP.');
    }

    // 3. Simulate New Visitor (IP: 2.2.2.2) - Should increment
    const res3 = await makeRequest('2.2.2.2');
    console.log('Visitor 2 (2.2.2.2):', res3);

    if (res3.count === res1.count + 1) {
        console.log('✅ Counting works: Count increased for new IP.');
    } else {
        console.error('❌ Counting failed: Count did not increase correctly.');
    }
};

runTest();
