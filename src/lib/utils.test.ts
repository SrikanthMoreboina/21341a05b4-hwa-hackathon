import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"

describe("cn utility", () => {
  it("merges class names", () => {
    expect(cn("a", "b")).toBe("a b")
  })

  it("filters falsy values", () => {
    expect(cn("a", undefined, null, false, "b")).toBe("a b")
  })

  it("handles empty input", () => {
    expect(cn()).toBe("")
  })
})
