import { render, screen } from "@testing-library/react"
import App from "./components/App"

test("renders learn react link", () => {
    render(<App />)
    const linkElement = screen.getByText(/""/i)
    expect(linkElement).toBeInTheDocument()
})

test("renders app and checks for logo", () => {
    render(<Main />)
    const linkElement = screen.findAllByAltText(/logo/i)
    expect(linkElement).toBeEnabled()
})
