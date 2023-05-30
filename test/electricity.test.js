
/**
 * DON'T change this file
 * 
 * if you find a reason for this file to be changed - such as a typo or calculation issue
 * 
 * please email - mentors@projectcodex.co - to discuss the required changes
 * 
 * DON'T change this file
 * 
 */
describe("The buy electricity app", function () {
	
	totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;

    it("should return 0 if not topup made yet", function () {

        const electricity = Electricity();

        assert.equal(0, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity with 10", function () {
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;

        const electricity = Electricity();

        electricity.topUpElectricity(10);

        assert.equal(7, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity with 20", function () {
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;

        const electricity = Electricity();

        electricity.topUpElectricity(20);

        assert.equal(14, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity with 50", function () {
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;

        const electricity = Electricity();

        electricity.topUpElectricity(50);

        assert.equal(35, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity multiple times", function () {
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;

        const electricity = Electricity();

        electricity.topUpElectricity(20);
        electricity.topUpElectricity(10);
        electricity.topUpElectricity(50);
        electricity.topUpElectricity(20);

        assert.equal(70, electricity.getUnitsAvailable());
    })

    it("should not allow a user to take advance more than once without paying the balance", function () {
totalAmount=0;
	
	advance=0;

        const electricity = Electricity();

        electricity.topUpElectricity(30);
        electricity.topUpElectricity(30);

        assert.equal(91, electricity.getUnitsAvailable());
    })

    it("should allow a user to take advance and pay for the advance", function () {
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;

        const electricity = Electricity();

        electricity.topUpElectricity(30);
        electricity.topUpElectricity(50);
        electricity.topUpElectricity(30);

        assert.equal(35, electricity.getUnitsAvailable());
    })


    it("should allow a user to take advance and pay for the advance and use appliances", function () {
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;
        const electricity = Electricity();

        electricity.topUpElectricity(30);
        assert.isTrue(electricity.advanceTaken());

        electricity.topUpElectricity(20);
        assert.equal(21, electricity.getUnitsAvailable());
        assert.isTrue(electricity.advanceTaken());

        // advanced ignored as you still owe R10
        electricity.topUpElectricity(30);
        electricity.topUpElectricity(20);
        assert.isFalse(electricity.advanceTaken());
        assert.equal(28, electricity.getUnitsAvailable());

        assert.isTrue(electricity.useAppliance('TV'));

        // advanced is valid now
        electricity.topUpElectricity(30);

        assert.equal(46, electricity.getUnitsAvailable());
    })

    it("should allow appliances usage", function () {
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;
        const electricity = Electricity();

        electricity.topUpElectricity(50);
        assert.isTrue(electricity.useAppliance('TV'));
        assert.isTrue(electricity.useAppliance('Kettle'));

        assert.equal(27, electricity.getUnitsAvailable());

    })

    it("should not allow appliance usage if not enough electricity", function () {
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;
        const electricity = Electricity();

        electricity.topUpElectricity(10);

        assert.isTrue(electricity.useAppliance('TV'));
        assert.equal(4, electricity.getUnitsAvailable());
        
        assert.isFalse(electricity.useAppliance('Stove'));
        assert.equal(4, electricity.getUnitsAvailable());
        
        assert.isTrue(electricity.useAppliance('TV'));
        assert.equal(1, electricity.getUnitsAvailable());

        assert.isFalse(electricity.useAppliance('TV'));

        assert.equal(1, electricity.getUnitsAvailable());

    })

    it("should allow electricity usage after topping up with advance", function () {
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;
        const electricity = Electricity();

        electricity.topUpElectricity(10);
        assert.isTrue(electricity.useAppliance('TV'));

        // not enough electricity units (4 available)
        assert.isFalse(electricity.useAppliance('Stove'));
        assert.isFalse(electricity.useAppliance('Fridge'));
        assert.isFalse(electricity.useAppliance('Kettle'));

        electricity.topUpElectricity(30);
        assert.isTrue(electricity.useAppliance('Fridge'));
        assert.isTrue(electricity.useAppliance('Stove'));

        assert.equal(2, electricity.getUnitsAvailable());

    });

    it("should calculate the total amount spent", function() {
    totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;

    const electricity = Electricity();
        
        // electricity.topUpElectricity(20);  // 14
        electricity.topUpElectricity(10);  // 7
        electricity.topUpElectricity(50);  // 35
        electricity.topUpElectricity(20);  // 14

        assert.equal(80, electricity.totalAmountSpent());
    });

    it("should calculate the total amount units bought", function() {
    
totalAmount=0;
	totalUnits=0;
	unitsAvailable=0;
	advance=0;

    const electricity = Electricity();

        electricity.topUpElectricity(20);  // 14
        electricity.topUpElectricity(10);  // 7
        electricity.topUpElectricity(50);  // 35
        electricity.topUpElectricity(20);  // 14

        electricity.useAppliance("TV")
        electricity.useAppliance("Kettle")

        assert.equal(100, electricity.totalAmountSpent());
        assert.equal(62, electricity.getUnitsAvailable());
        assert.equal(70, electricity.totalUnitsBought());
    });

})