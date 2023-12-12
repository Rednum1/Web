import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class FirebaseAndSeleniumTestCase(unittest.TestCase):
    def setUp(self):
        chromedriver_path = "C:/Users/FollW/OneDrive/Desktop/hru/chromedriver-win64/chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument("webdriver.chrome.driver=" + chromedriver_path)
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.get("http://127.0.0.1:5500/index.html")

    def test_navigation_to_write_review(self):
        self.driver.implicitly_wait(10)

        # Найти элемент с id="openPopup"
        write_review_link = self.driver.find_element(By.ID, "openPopup")

        # Кликнуть по найденной ссылке
        write_review_link.click()

        # Добавить ожидание для корректной загрузки окна с вводом отзыва
        WebDriverWait(self.driver, 10).until(EC.text_to_be_present_in_element((By.XPATH, "//h2[text()='Напишіть свій відгук']"), 'Напишіть свій відгук'))

        # Найти поле для ввода текста отзыва
        input_field = self.driver.find_element(By.CSS_SELECTOR, "textarea[placeholder='Type something...']")

        # Ввести текст в поле
        input_field.send_keys("Ваш текст для отзыва")

        # Найти кнопку "Відправити" и кликнуть по ней
        send_button = self.driver.find_element(By.ID, "closePopup")
        send_button.click()

        # Добавить ожидание для корректной загрузки страницы после отправки отзыва
        WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "logo")))

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
