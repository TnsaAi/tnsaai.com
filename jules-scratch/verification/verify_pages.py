
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Homepage
        await page.goto("http://localhost:3000")
        await page.screenshot(path="jules-scratch/verification/homepage.png")

        # About page
        await page.goto("http://localhost:3000/about")
        await page.screenshot(path="jules-scratch/verification/about.png")

        # Careers page
        await page.goto("http://localhost:3000/company/careers")
        await page.screenshot(path="jules-scratch/verification/careers.png")

        # Models page
        await page.goto("http://localhost:3000/models")
        await page.screenshot(path="jules-scratch/verification/models.png")

        await browser.close()

asyncio.run(main())
