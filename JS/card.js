const menuProduct = [
  {
    id: 1,
    category: "pizza",
    img: "https://bit.ly/3AXu6uf",
    title: "Neapolitan Pizza",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 7.99,
  },
  {
    id: 2,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Chicago Pizza",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
  },
  {
    id: 3,
    category: "pizza",
    img: "https://bit.ly/3mbQaLx",
    title: "California Pizza",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 6.99,
  },
  {
    id: 4,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
  },
  {
    id: 5,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
  },
  {
    id: 6,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
  },
  {
    id: 7,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
  },
  {
    id: 8,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
  },
  {
    id: 9,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
  },
  {
    id: 10,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
  },
  {
    id: 11,
    category: "grill",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3LOxR7YlNjxqR8wfmGt9n07Zj3WUCNmxpA&usqp=CAU",
    title: "Grill",
    ingredient:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    weight: "350g",
    currentPrice: 29.99,
  },
  {
    id: 12,
    category: "grill",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3LOxR7YlNjxqR8wfmGt9n07Zj3WUCNmxpA&usqp=CAU",
    title: "Grill",
    ingredient:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    weight: "400g",
    currentPrice: 41.99,
  },
  {
    id: 13,
    category: "grill",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3LOxR7YlNjxqR8wfmGt9n07Zj3WUCNmxpA&usqp=CAU",
    title: "Grill",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 32.99,
  },
  {
    id: 14,
    category: "grill",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3LOxR7YlNjxqR8wfmGt9n07Zj3WUCNmxpA&usqp=CAU",
    title: "Grill",
    ingredient:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    weight: "450g",
    currentPrice: 31.99,
  },
  {
    id: 15,
    category: "salads",
    img: "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg",
    title: "Salads",
    ingredient:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    weight: "250g",
    currentPrice: 7.99,
  },
  {
    id: 16,
    category: "salads",
    img: "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg",
    title: "Salads",
    ingredient:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    weight: "150g",
    currentPrice: 8.99,
  },
  {
    id: 17,
    category: "dessert",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGBgYGhgYGhgZGBocGBwYGBoaGhgYGRkcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzcsJSw0NDY0NjQ0NDQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ9NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EADwQAAIBAgQDBQcDAwMEAwEAAAECAAMRBBIhMQVBUQYiYXGBMpGhscHR8BNCUhVy4RSC8TNikqIWI1MH/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EADERAAICAQMDAgQEBgMAAAAAAAABAhEDEiExBEFREyIUMmFxgZGhsQUVM1LB0TRC4f/aAAwDAQACEQMRAD8A9UijRTxWUjyO0kkRMp6Z7tAyK+JZ1F1W8AY7irruGHoZqc05cA7gHzAjp4dfDaNhkUeVZgK3HD4yq/Gn6z0F8Gh3RD/tEiPDaX/5p/4iAujj3Y74pdkef/1l5NS4lVbZWPkDN6mBpjZEH+0SdKYGwA8hC+Eic+rfgymBOJb9hA6tpD2Fwz7u2vQQhaOIyOCMfImWaUuyRylO0lUzjNOC+sLJHVGhceSeKMrmM7GSfDryHZ1FI0Y7GSRE4uLpmoUaPFANGiiinHDxRRTkcKKKKECMY1o5jRbCFYRRRTDjqKKKMZwpRxNXK0vQXxcbGMwupGPgsJiAeclzTNNWInS8QYc56KYs0eaMWgH+qmP/AFcQ0YHS0YvAv9XEibi3SdZxoC8iauBzgFuInrK740nnBbCSDtbHAbSXhlXOSTymVfEw/wBmGuH9JNnk1EYo0g9ERHjGSAldhykyyM6yUCNzvZJ8hCtGtOrRSc45ijxWnHDRRRTrOFFGJivOs4UaPeMYLOFFFFBo46ij2itGs4UocWS6XhACVsel0MOG0kYzJVpWZpdxKSi4noxFkbPImqR3lVmjEYSmrEKsrFowadQRf/VkbVZBmjEzGg4k+eG+AcQ/TVu7e5HO0z6GE+FrcMPL6yfNG47D8Si5VLg1CcdB3RvSxl/9XMNrDx3gfA4S3eO8J0qbPopsBoW6eA8flE4sVO3z4Oyxxp+3jyT4dwxNjcrofD1kuYbX1lLEYtaa5Kfv+evM+MEtW1sTqev3k/USipbO338HQwue/C7GivBq8WCsUqDKb6N+0/aCqtd0OdWNjuvI/wCY1esK6/8AcPfEax0OlS+bdefBqAY8yGB4m9A5Wuy9OY8vtNDS4lTYXDCapCsvTTg/K8ouxSsMcn8hJBWU/uHvhWKcZLlEkYxg0U6zKHiMUU6zBooopxxLFFHAjARTmul1PlJLREaWmrk4yeKTeDKqQ9i01MGVac9GHAtgp0lWokKPTld6V4xNI1JvgHFOkYoRuLect1CwJRNPZJI0JzKrWJ6C+0r0sS6ORYNlUtZ7kCxF8oOim2t7H7TvqlqpLYqj0zcbvcvYLg9SoLhco3zNoCPAbn3TvGcCqpc2DgC5Knl5GxPpC9DjKVEFRTa9rg6Mp5gg7ESPFcSBViWJ00t1PgYqXVSvgOOAzdMaw7gXy5QFux0tIOHYajUVmZmVlOqra5uLgi/r+GV+J46nSW6kkjUG+q221FtfzWZkze1aeWMx4bluuAy/G0U5SGNt7AC1t9cxhHD8aR6dqdltoRfUDy6eMxNVcx7zZczAs7AkAHnlGp1N7DpNxwns5RpoChLFgL1LqS1+YNtB4DSLh6s09LNzxxQq/wDwHYmow7wFwNxzt1nJK1F01+YMOtwwdW+H2me4lgHoNmX2Tt08jETwTitTQ3FkhN6U6fY5pYgr3X22DH6x8RhzTOZD5/Yy9hMGldO6wDDdSNQfMbjof8iDyz0yaTbbXPIH6RUsUklKtmMjNSbS5XKHrV1qAd2zc5TClDcbS/V4U9swGlr5gQwt17pOnj+CGmAbhtCOULQ4KmhkJQr2u0S0KikX6co71L+kqGlzX3fXy/PGSI05Le2c4rlEyuRsT75ImMcfuPzkIMU0xxT5RcTirjex8xJ040ea+4wWREq8hvMoW8ON9gz/AFpf4mKUv6VU6RQ/Tn4Yv08Hk1IE6tEI4EalZ5jY0U6t+CM3u+cdHBJ7vYGwdicKWJtK44UD7TegH1MKEStjMWlNSzsFA68z0HUyle1GqJRxWGo01uVzN+0Mdz5bW6wFVwLOrZAT3s6EBR3tRYsT3RZjtpIq/ETX77XykHKuwC9N7m5F787DQbQjwz/66Kpfq1uQznNb0vb0iM8qplWFNWkUm4A2XOXvVJBPJMtrWuBckdfhO8aiU1ZMQVZSjMjkZWDqLgKd73tsbGSYnFhTctqPGwHj/mZfF8aTE1lphkKIGOZlYpnsRa6sGKbEW/cBuNIjHJt7DpQaW7AGIxmIFRP0VD3GVkUAEnkb+WgPK3jNJgsO7AmsjIoBurEXJy30ynlcHfwgulwuir53rhwtjlRXA0N+8zAaXA0Hvl/inGc1IFBo1wAo5AsLADn3T6HwmzTlSXPkZFU77FviXE0RQqGy6rtbn9d/WA6uGao/fDW3t1O4BHS9hbfXUCZx3d6gNVHCX17rfbymm4fxOggsMhAByqQBbTcePOd6ejd8hKepUmXcRdw7XFlUErcaBj0Hny6j01nZLjSrQFJtGQn/AHIxJDDyvYjwHWYTB0P12YKcrqr1FFtHIuSmuo7oNt9ryzwzGsro1Md8E5RlJvcEMhXfa/z5Tlqj8pmSMckafY9YweJLasthyPP3Sr2i4hTp0mvlLaWU+Ol7c7a/hnnvGu1+Ip2VkqAtfKMhBOXflylPhlTEVjnqoy3tlQg5jcXB15W29T5Pjkk1TW31InhUZXf4I0NbBOqLXDEIQLqrFXAa9yri3eGh0AF9NZY4DxX/AFOejiAMyMRTrAbi5srddt76266lcUxKjDqAdAEUem418pkMNi3RjZ1Xvl+8pA1IYEMLgai/esNtYhTq0uP3KNLdNun58G9R3w7EHVN972H8genu8bGU8XjsOzqFexYhVOUgZjsFY6XPT3G970a/GTXUKy5FS7ObgqbA2KsNLb3mF4rxu9QMijuEFAQSDY+06nmTbTT3xqxrTXbt9Adbu+/d+T1nDV0bu1UXNyZe7e3iLWP4bSDHYLIcwBK9eh6G3z28uYjDdo6dexYCmzEA/wAQTopbUm2wzaEaaEXmhwudlyggC2p+nj5wGr9r38P/AGHGWn3R28p/4B1NLm3x5evSPUospswt08fI85oqOHRBrr4wRxTHLqq6j4A9R4wJ44xVthwzSnOorYpWh7g3DrDOw1/aDy8ZDwvh61FSqb7XK8iQSND5jaT9oMYyJkUML7tbQDpeNw4lFepL8BWbM8kvShy+Qh/raf8ANfeIpg7n8MeF8U/Bv8v+p6GFnYXr7p2BaIyuOOMVSPLuzmwEYred5YzDTSGzrKzqNekwfF8XUeo706pCaKrLyXmANCLsOovfmLQl2n457VCmdBcO1/QoD8z6TOYSujOwzKcqu/tDVQBdb69NPMyPM+K8leGD5OkRVFlAtcnlz1O2g8vScY3jyJZRmZz3QoB321OwHjeQLxGmGIJKLutxcnXW3XXS/wAN7CKuNU1M+QhFLBQdGcqSCzfxXQ2HPU6aXHJGM4odDVFsh7SVq5bK7aZQzKt7WNrBuupGkFdm8M1ZnVWF1R3udBZBmO+2ghTiWNaozuP3KARpYDS48RoPfDH/APJqKriKhYezRbW213S/wMOEI/KuAZzktwXwDhL4t1X2aaFc92IL31ZVIGjZQfIWlntP2fSgFqYerUDIVGRzcWOhAtYjlfXrtNXgUajUqoy2/TDNmsq5jUfKr2UAG6r05GZvtFiRUApZhcm/jZd/pJ1N+rpQ2tUXJszj4lmps5JUrYbixuOoHh6385oeE9lcO1FXDMXZA2cG66jMbJtb81mX4oe7+gmwOaoeZf8Aj6WA87w12H4iVzUKlyAMy9cv7h6H5xmbWo3F8fsZi0t6Wuf3J+HcIdF9h92CuobUHYab6fOHuw98PiKi1yqhqZZWqXV1sRdbtbQhr6/w91zBcRq0lK0VLM3OxZieQGkCVeFVqzM1Q6gtn1ucwOzfxt08PWDC5brn9DZ94vZfqEMV2iQ1WanUuuYgXINwNL6yD+r3LWbSx5C509kka2vYbzC8UwbK7BicwJFwemmlvKQ8MqP+rlLnLYkk62P7Pj8LzH0/LsOOVKlRtv6mmUhmDqSO417nW405bXktXin6llAVV2VVVRblyAMyr4J3qKEJu5UBRqcxOgBFvDlDPF+HvRazLlJ5C9vMXgPEtO3Aayq/ctyziMGHVkpsVLhWZlUkWUm6sl+pBzA8hKbdj6aUWqGszuCLLZV0JA1UklteYPpIKuOYFWQEELZtdSbkk3HmPdJhxVyNSTbb5gH7zY64rZ7GSjCXOxSw791kQixtqRrzykE676ny6T1XAN+nSRSRdUUEja4UA2PSeacFwueoqnbML9MosW+F/fNzXxHXRfPedPJpZkcWpUT4vGM2gOVf5Hn5Dc+kr1aVNUzXLM1wL6WPWwlSrWvsPzzOs4UknpJ3Jt20VLFSVbGg4LiawAAC5BtdT8NYcXGIe61td+Y9RMthGrWOS7AC5Ue1bqBz3kiYoPqDK8WVxil+5Fl6dTk2q/D/ACaP/SYf+NL/ANYoCz/9xijvWXhCvhpf3GwAj2jxiZYecPIa7HKcts1ja+1+V/C85er0kDPEzypbIKMWzxDFM2dg51BIN9dQdYsB7YHUMPgSPiBPR+K9k6LsWsVLG5y+O/xvKVTsfTBQqxDKRrvfzEik9mj0VJPezz7i4IdD4EeVtfv8ZEGLAD+Omp9fPnNRX4IarWOhF/HWDcT2dxCKWKFgb3sQ3w3tMxTTQzImmA3L3GQKVsA19xfc6kX00mn7OYmphhnA7tVjv+5UNuXiDALUWBLFWHUm4Fx7OvX7S5hqjsi6kZCygX2v3tLnTf4RkpuKtAadTphntT2jeoQ1IBGZFRza98rMwI8sxt5mZHDUHDPVcsz5cqk7gn9wt0FzpLeKqlRmuQdhrY6yurE2vf8A46D6Totv3d2a4qPt7FvhXDSxvpYc7X18rwnQ4YVqhthYk5dM42Cnw2JHM+UpYXjDoAosyAmwItYnW+n5rDvD+OWz1f01Z2AChtVS2p03O8Kco6RajLVZeNd1QhQVU7t7It0vzHhAGJ7RMgKJlUWtmRcpPLyCjXQATjieOqVjd3J6Lso8lFgIFrYUnnFxnXDGSgu5DjntdmnPZhFeplZgpYmxY2W/7QSdhYAe6RYtSVRNze3pO6PCXHeX5XBj6uIpupG34bxU4ckUmpqTuRrfzbXT1kHaPibV2GewKgrpt8PKZnDCoaio62W92O3dGp5eEtU8YTUzvqM4Yg7FR+3x0FolxlVWMSjeoZjaFuCcCau5A7qIbM/QfxH/AHfIegI1APaI13tyHpPUOGIqUEAAHcQm2l2YAknxuSYMWFlbSQP4Zw1C1UqtlUqi/wCwd7zJNjeXG4aByl7g9EmlmGudmc+baj4ED0lkrHQxppNi/XcW0gK2AEjOCEO2E4egDtpOeJBLqZdyPgShXt1Fh5gg2+fuljifBA5Locr9f2t/cPqPjKhQoehGoP1EOYTEhlvzG4/OUZGMZR0yRPknKMvUizL/ANIxX8F/8hFNfFM+Ggb8dk+h2TIKjzuo0rOYeSfZEsYnLtI2nRMq4jGohAY7kCw1Ot9fAaSZtdxyTeyRNiDoPISLNYTuuyuoZbgEaaW022MrHMNDtAmqbGQ43BGCI/UPmYYNpncOxFUgdSIXLMup1Ph9ZPh4/EqzLdfYtNhkN+6Nd9PC0yXaXgyIoemMpdjmHIm29th6TR/qvp3Sb+nzgftJjAUQWIN2uPK0bKVRYGKLc0Y+nwd67ZAQOevyhSh2FqHd1BHS5uD1MscAqf8A2+h+Ym6Vxp4zYSbiHn9sqR5/juxlQIWVgx07uo23vfaBaNB6S5KilWuSAek9bZxymN7X0gzJbcA6/T4mdJ7bg4m5SoybsDKuIayky49CX+H9mGxCk58tjYXGh5n0nQcbG5IuKtmYpMRrfXr0vLlLHuN9b23Ok0w7BVCps6Ei9gQemm217QXieymJS/cJsATYhvrfr8Y/UuSdU9ii/EXcWYm3UfP6bc/dFQbZjbU8trbyLFYWpTIzoy35ZT79tfTpCPD+FlsO9c6KjKo8Sd7dLd33+EyT2sOK7FrC0s7qgGrED3mw+c9GxChUboqG3osx/Y/Bl3zn2aYv5s1wo9FzHzyzTdoa2Sg55kBfeQPrA/62DP51EJ9n7/6dGB5emmmohCwbQix+Bg/sliVfC08pBKgq1twwJ3+B9YTr0ragefh4iWY1UF9iOb97vyVKlIrvOZeR83dbfkesqV6djOa7nKV7MYqGFj/xK9IsjX6bjqJMrSc0Q48eRgtXwapVs+CT+oJ0PuH3jyt/T2/DFNuRlQ8l9pDVkzG0hZoE0ZEEYniyobFT7WUEbFgLkfA+6ZzHcSos5ZbqT7Q9oEjc208ZZxfZsu5b9bLdixZgSbnnpa0r4vsvlF0r5mFtMuUed7mRyUpLj/Z6GN4o99/xNTw4A0kIvqp333NryVra6jXlOOGaUaasbsEAPmNCZM50jKVEl+5/cy+Fa1dv7m+c0Ci4NgAOvMzJ4XE3rXHMk+/WaymbjX89YjBw/uVdSmmvsJabAaNYeJXSZDtYWLqCc2VRt4kn88psCoPL3j6QZxfggrAENlYaA5dCOQIHz84ycW1sBgmoTuRj+CNaoDbkZtMEM3ec2tso1vcc+kE4TgDUyWZgzWtoDYD1hjA0yOXv+vKZGLXIzqMkZu4lxKY8fM6j3DaZrtWihlsbmxvp5TV8tvOxt8ZlO1Td5fJvjb7GdmVRB6Zt5EZeos23Z6jagndBvf2gDMYouZvuCIf00FtlHrF4t3RT1jqKL1G5Y3uNTa21vKWP0uhBHr87zlQ21/oPz7zopz+I+0pSPMb3IcXg0dSrqGUi1iB8OkynaHDLRw/6KCy5lA5k7sxJ6zZZRbUzOccph2oruWqg/wC0b/8ArMlwMwy334JuC4D9Giqn2j3n/uYbegAX0gXtliDkVNLM2tz01F/DUe6afEuAN5512m4ilR1VCe5mBuLak6/Kc+KDx3KdsqPiP0mtRrFrjvMgZFJ/iQfat1tO6fEKoNw7g9QxB+E54XjhSfVFdToUO/mPH88i+JxODe+VGRhvl0t4ke7lBaTV3RXqp1Vljhnamslg3fA/lo3o3XzvNthOLU8SmZD3l9pToy+nTxnnFHhrvcojlR+5hlA8ydJPw+o1Jwyt3lNjY3BHMX5zo5pw2lwBkwQyK47NG/R9Zbwzwbhqlxe0tJcSxM82cQtmjQf+qesUOxekuttK9SWhK9ZIElaDi9yuKdzJf9J4SJHsZc/1Kc2APidvtOioVuFJyXAOrixXllsB006wHxfi5UMim5YEE20Ab67wpx/E/pqzWvzHQk/SYXGOW1JJJ198jze2VIrwY1JWyOnj0SrcHuhmAJFu7bQma7hvHEdV3F+vjt755vXpsSQN+XnDfBMFmUBKjC2hGlwSR+3nqNIMWorYfmhq3vg9GRxOrzLU8FXpnNmzqmndHf2vmK5rA+AvJcLxe63J19kX63t79Yy/JFp8GltGCDx9IBXiLZlLE7gAAgA/3fYQsOILpofHTb7zVJMxxaLLtbrMV2krXqWvso+Jb/E2D1ARcH1nn3FMTndn6k+7ZfgB8YrNxRV0kblZXpnWeh8EcfpoNdhy+s8ySoS2nM7T0Hsric1IC+2nu/BBxKpDusVxTD1jtbz/AAxwOViPzlEPOdgyqjymRVQLEm8y3FsRkr4cnSzHXlZ7Jf039Jqa50t8OUxXbbZCCLjNceBtYwMnG30KOnpun9SXtLj8iX0A1JueQ2vMAneqNUFipBsL2PKx2tyPvl/G8Vd0NKqut1GbfQajQb301G9/WDGwjrqmo8/kZzVrYfjjoe4RpYoL+4r4feWG4qy7VT6G0Dpi9bMtj4iGMJ+m9rqD1GkU4pfM6KNTfCsWI4pmRRna+uY6E25AS/wLBlgrE3XU3uSTqdyZYpYCmwAKL5FQR8rQ1g6QUBQAABYADQDkNI2OOMlzaETytcKmEsD0hEr8h+fGRYWhlFzvLKrKYxIZys4yx53FNoAtGJhfzkhjCaBZQrU5l+JYlkZrgkEkhhy8+lvGbR0vB2MwGbW2oic2LUirDlUXuZHDv+qGRrnfu3tcjxBgfHlQxCXKg89T4rfwhbinDHV8ygjcd3x01tvz1g/FYcBVRbd0EsTZVBPUnc7yH5bi+T0ElJpp7AvOc1r6SOqpsSrFWsRcfI9RO6gyndT5ZvqBOCTvaw9ZqdBuIXw/aV+6UqE5VQEOFuxFgbgDrr5c53h6RObKbFjmI5jpbwgLh+GdXzgH/E1VOlT7j6hyLhVbUHbYfXT4xibUuLQjJGCjtsyIYSpzObvZtb2JHlLjs7XSxQMG1DXsSAOnn7xLlHa5B90kaoP4P7rfMx7WJckq1vsQ1a4RbC1iSAv7VsBvrr/x0ucviaffyprrp0vyF+fKbJaAZbkD33+MgqcPU8pjwxnTsLHmeNsxZTvXtrc6a7+X0mn4GjouUjfU9QTp9JZ/pwzZvza0ahgnVrklhY6bb7G/pFrBKLvkbk6hTjReoY5lLBRf2Tc35jWxv3jf5S8OLDVSpzhQxU25g+NyLi2kzzYKplAuLAEeY5A+WgEhXBMpUlFOT2dNtRy9IVTj2EaYS5YfrcXzKyhSGtprcEzHdpeH1WdHdly2tcEmze4dPgZokwpIz3N76KOoN7n1B0lTizKqFCczNYkk66G8RKcu4/FBJ+0xNTBEAlwdNFYbE7ga8pe4XhiUPgfh/wA3l6jgBUtvZfQa7/SG8LgFUWA+3ujsSb3Z2aaSruAkwOoaw01BtqPLpJ14Upu6MVc3uDqpv05iH3o305ybC8KLHXaNeNPYXHI473RnMHhqgcKykg8xbU62sToNes0+CwwFFXsA5IJI3vm9nXYDmPO8Ipw5BJ6WEUXIAgw6ZRlaMydRrVDI95II6rJFSVJEjaOcsUltFNoGyYiMZCuLH7tPlJwQdQfURcMmPIriwWmuTi8RM6ZI1obTNTK9SmDuIF4jwJH5AGaApIqixcoRlyh0MkovZnn2K7Nuhuqhx5kfAfeV8Pwp2YZzoNlJJt4eE9IyyJ8IjbqIv4eN2ij4qTVMB4fhaAC6jzEtf05eVvdLv+hA2JEc0GGxvH19CdyvuUquADLYi42328ukorwx10DHL0Op94hso3SIFuamLlihLlBrJJcMH4bBsoAPKTpSlrMehjGp4GGopcAOUmyH9MTtafhHNXwnS1D0+U2zGmcml4SN8LfpJ8x6RZXPhMZm4NxOE00JHO4NtRA1Xg63uST5kzV/6W+5iXCKOV4p44t3Q6OVxVWZ3DYQgd0adBpCNDh7HfT4f5hemgGwnYENQBlkZUpYJVlkLYaSTLFTGsYkLcjhVJ2E7VSPGShfwxzYbmFQttka053lA3g/iHHKVK4Ld7+K6t7uXraZPifaarUuKfcXrux9eXp74meeEPqynD0mXNulS8s3v6ixTyz+ov8Ayf8A82iiPjfoWfymX9x6DVWDmqMjHKxHO3I+kKvKGKp6fm08Z3F2ifHXDJKHGiNGHqv2MIUeJU22YeR0PuO8zjCV8RRDAg8xKcXXZY7N2hkulxy42NncRmXx/PSea08ZWpMVWoy25Xuv/idJp+CcZeopzWLKdeVwdj4dPSelDqoz2aAy9BPHHUmmjRZfD3axjby89PnAKdqUuVdGUjQ7MAeY01+Eu0uP0W2qAf3G3ztGxzY33J5dPljymEMsWWRpikbYqfIgyQVV/CYxSi+4upLsNljZTO846/GOGHX5fabsdbI7SNx4SxmHWckDr8pxqZWKyRFkuUdflHBA5n4faZSOcjkIZ1kj5x+Gc/qL+f5ne0zcfJ4xss4fGIu7AeoErVeNUh+4Hyu3yEB5cceZI1Qm+Ey4iHp7zOwh6+7/ADANbtMo0VSfcB9T8JRrdoqh9kKvndj9PlEy6vFHh2OXSZpdqNYQvPXz+0jbGIDlzAHpz90xFXHVW9p28gbD3CQ0mKsGGhGsQ/4hv7UUR/h7r3M0XGO0f6RyimzEi4JIC+m5J8NJmMZx2vU0L5V/ivdHqb3+M0GIpLiKVhYMNR4N4+B/Npj61MqxVgQVNiDMy5Jve9mV9Hiw8afcub3/ABGEQWPGBkx6Y+SKNminHHphkLj885LI3iJI+ZiCqq2NvzzkREtYxNj6H02/PCVpM1T2LYO1YG4rQtZx6+n58JDwrE/p1Fbls39p+2h9IZxFPMpXr85n2QgkdDK8E9vsXY2smNwkGO0mDyuKi7Pof7h9x8jAZWarBEYjDlP3Jp6j2T6jS/nM4y2OU7iUZkrUlwwemm6cJcrb8CDLJFxVQbOw/wBx+8ciMViU6KWovkmXi1cbVG9bH5iSDjuIH77+ar9pTKzkrCWSXlg+ljfMV+QRHaGv/JfcIv8A5DX6r7oMtFab6k/LO9DF/avyC9Lj1Y7sL/2iQ1eNYi//AFLei/aD1Njf8tJ6iXFxBeWd8sH0cSfyr8jpuK1jvVb0sPlGp417952YHQ3Yn11la0VpjbfLGenDsl+QaCzrLKeBrftPp9peEmezolknF0VqtLnIxLpWV3p2hRYUZdmcARxEI8I0sYHElGB5cx1Eu8dwAqIKiasBfT9w3t5j7iCYT4RjLHIx0Ps+B6espwZF8kuH+jJ8sZRayR5X6oy14xhjtFw/I2dR3G38G+x/OUDWmzg4SpnoYskckFJCzRo9o0EaenGRt948UTLg+XRSxW3qPrKUUUnlyWY+BoBxntmKKMwcsrwcsL9lfbf+0fODOI/9V/7j8zFFLsn9KIOP/kS+yK8aKKTlYxnMUUII5EaKKcEM0s4fYRRQGZIrmNFFNNRNh/aXzHzhkRooqfJNm5OxI6u354RRQFyKXJWMcxRRg0ZY67iKKdHkx/KHuOf9B/IfMTErHinodT8y+wH8P/pv7iiiik5ef//Z",
    title: "Dessert",
    ingredient:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    weight: "450g",
    currentPrice: 7.99,
  },
];

const menuContent = document.querySelector(".menu-content");
const menuBtns = document.querySelectorAll('.filter-btn');
const greeting = document.querySelector('.greeting')

//loaded items on html
window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menuProduct)
});

//btns
menuBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menuProduct.filter(function(menuItem){
      if(menuItem.category === category){
        return menuItem
      }
    });
    if(category ===' '){
      displayMenu(menuProduct)
    }else{
      displayMenu(menuCategory)
    }
  });
});

//display menu
function displayMenu(menuItem){
let showMenu = menuItem.map(function (product) {
  return `<div class="product-card">
      <div class="product-img">
       <img class="product-image" src="${product.img}" alt="${product.title}" title ="${product.title}">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-ingredient">${product.ingredient}</p>
        <p class="product-weight">${product.weight}</p>
        <p class="product-price">
        <span class="current-price">${product.currentPrice}</span>
        <span>$</span>
      </div>
       
    </div>`;
});
showMenu = showMenu.join("");
menuContent.innerHTML = showMenu;
}

