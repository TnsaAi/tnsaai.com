
import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        await page.goto("http://localhost:3000/models")
        await expect(page).to_have_title("TNSA AI - Advancing Artificial Intelligence")
        await page.screenshot(path="jules-scratch/verification/models-page.png")

        await browser.close()

asyncio.run(main())
