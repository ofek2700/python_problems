#1. לכתוב קוד שידפיס את המכפלה של 2 המספרים הנתונים רק אם המכפלה שווה או קטנה מ1000 ,בשאר המקרים , הדפס את המכפלה
number1 = 40
number2 = 30
numbers_product = number1 * number2
numbers_sum = number1 + number2
if numbers_product < 1000 or numbers_product == 1000:
    print ("The result is" ,numbers_product)
else:
    print("the result is", numbers_sum)
