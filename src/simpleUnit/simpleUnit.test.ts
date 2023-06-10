import { getUser, getUserName, sum } from "./simpleUnit";

describe("sum 함수 테스트", () => {
  it("두 값을 더한 값을 리턴해야 한다.", () => {
    expect(sum(1, 3)).toBe(4);
  });
});

describe("getUserName 함수 테스트", () => {
  it("이메일 도메인은 제외한 유저의 이름을 리턴해야 한다.", () => {
    expect(getUserName("hello@gmail.com")).toBe("hello");
  });

  it("올바른 이메일 형식이 아닌 경우 에러를 반환한다", () => {
    expect(() => {
      getUserName("hello");
    }).toThrow();
  });
});

describe("getUser 함수 테스트", () => {
  it("이름과 나이 입력시 객체 형태로 반환 해야 한다.", () => {
    expect(getUser("kim", 20)).toEqual({
      name: "kim",
      age: 20,
    });
  });
});
