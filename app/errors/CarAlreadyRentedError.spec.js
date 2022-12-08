const CarAlreadyRentedError = require("./CarAlreadyRentedError");

describe("CarAlreadyRentedError", () => {
  describe("#details", () => {
    it("should return car", () => {
      const mockCar = {
        name: "Ford F150",
      };
      const err = new CarAlreadyRentedError(mockCar);

      expect(err.details).toEqual({car: mockCar});
    });
  });
});