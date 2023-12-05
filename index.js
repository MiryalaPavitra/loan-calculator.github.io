function calculateLoan() {
    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;
    const employeeAddress = document.getElementById('employeeAddress').value;
    const designationElement = document.getElementById('designation');
    const designation = designationElement.value !== '' ? designationElement.value : null;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanDate = new Date(document.getElementById('loanDate').value);

    // Automatically set maturity date to one year after the loan date
    const maturityDate = new Date(loanDate);
    maturityDate.setFullYear(maturityDate.getFullYear() + 1);

    let interestRate;
    let designationText;

    if (employeeId.startsWith('E') && employeeId.length === 4) {
        switch (designation) {
            case 'manager':
                interestRate = 0.1;
                designationText = 'Manager';
                break;
            case 'developer':
                interestRate = 0.08;
                designationText = 'Developer';
                break;
            case 'analyst':
                interestRate = 0.05;
                designationText = 'Analyst';
                break;
            default:
                interestRate = 0.05;
                designationText = 'Unknown';
        }

        const interest = loanAmount * interestRate;
        const totalAmount = loanAmount + interest;

        document.getElementById('result').innerHTML = `
            <p>Employee ID: ${employeeId}</p>
            <p>Employee Name: ${employeeName}</p>
            <p>Employee Address: ${employeeAddress}</p>
            <p>Designation: ${designationText}</p>
            <p>Loan Amount: $${loanAmount}</p>
            <p>Date of Loan Taken: ${loanDate.toDateString()}</p>
            <p>Maturity Date: ${maturityDate.toDateString()}</p>
            <p>Interest Rate for ${designationText}: ${interestRate * 100}%</p>
            <p>Interest: $${interest.toFixed(2)}</p>
            <p>Total Amount Payable: $${totalAmount.toFixed(2)}</p>
        `;
    } else {
        let errorMessage = '<p>Error: Invalid Employee ID. Please make sure it starts with "E" and has a length of 4 characters.</p>';
        document.getElementById('result').innerHTML = errorMessage;
    }
}
