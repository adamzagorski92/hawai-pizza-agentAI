# 🍕 Hawai Pizza AgentAI

> **Lokalny agent AI do tworzenia najbardziej luksusowej, absurdalnie ekstrawaganckiej pizzy hawajskiej.**

---

## 🎯 O projekcie

**Hawai Pizza AgentAI** to lokalny agent AI, który krok po kroku pomaga Ci stworzyć pizzę hawajską godną miliardera i szefa kuchni z trzema gwiazdkami Michelin.

Projekt został stworzony **dla żartu i nauki** — ale jednocześnie pokazuje, że:

- 🤖 Możesz uruchomić zaawansowany model językowy **lokalnie**, bez chmury i bez API
- 💸 Nie płacisz nic (poza prądem 💡)
- 🍍 Możesz dostosować agenta pod konkretny styl, temat i zastosowanie
- 🧠 Wszystko działa przez interfejs tekstowy, bez potrzeby przeglądarki

---

## 🔧 Wymagania

- 🟢 **Node.js** w wersji co najmniej 18
- 🟢 **LM Studio** – https://lmstudio.ai/
- 🟢 System operacyjny: Windows, macOS lub Linux
- 🟢 Trochę wolnego miejsca na dysku i najlepiej minimum 8–16 GB RAM

---

## 🧑‍🍳 Jak uruchomić agenta na swoim komputerze?

### 1. Zainstaluj LM Studio

Pobierz i zainstaluj program z oficjalnej strony:  
👉 https://lmstudio.ai/

---

### 2. Sklonuj repozytorium z agentem

```bash
git clone https://github.com/adamzagorski92/hawai-pizza-agentAI.git
cd hawai-pizza-agentAI
```

---

### 3. Zainstaluj zależności

```bash
npm install
```

---

### 4. Pobierz model w LM Studio

Wewnątrz LM Studio:

- Wyszukaj i pobierz model:  
  `lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF`
- Możesz wybrać inną wersję **LLaMA**, ważne by miała rozszerzenie `.gguf`

---

### 5. Włącz lokalny serwer API

W LM Studio:

- Wejdź w zakładkę `Settings` (Ustawienia)
- Przejdź do sekcji **„Developer”** lub **„Dla programistów”**
- ✅ Włącz przełącznik: **Enable local server (OpenAI-compatible API)**

---

### 6. Uruchom agenta

W terminalu, w katalogu projektu:

```bash
npm start
```

---

## 💬 Co potrafi ten agent?

Po uruchomieniu zobaczysz coś takiego:

```
🍍✨ Witaj w Interaktywnym Doświadczeniu: Aloha Royale ✨🍍
Przygotuj się na stworzenie pizzy hawajskiej tak luksusowej, że mogłaby zawisnąć w muzeum kulinariów.
Zadawaj pytania, aby udoskonalić przepis — o składniki, egzotyczne wariacje, elitarne techniki lub prezentację godną królewskiego stołu.
Wpisz "summarize", gdy będziesz gotowy na finałowy przepis krok po kroku.
```

---

Agent poprowadzi Cię przez proces:

- 👨‍🍳 Stworzy pierwszą wersję pizzy
- ❓ Zapyta, czy chcesz coś zmienić, udoskonalić, dodać, usunąć
- 🧠 Zapamięta Twoje pytania i modyfikacje
- ✅ Wygeneruje pełny przepis po wpisaniu `summarize`

---

## 📁 Struktura projektu

```
hawai-pizza-agentAI/
├── index.js          # Główna logika agenta
├── package.json      # Konfiguracja Node.js
└── README.md         # Ten plik
```

---

## 🧪 Przykładowe możliwości

- Dodawanie trufli, płatków złota i szynki ibérico
- Używanie ananasa sous-vide i sera burrata z mleka bawołu
- Tworzenie prezentacji na lodzie kruszonym, podanie na porcelanie i z winem Château Lafite Rothschild

---

## 🤓 Ciekawostki

- Działa na **lokalnym API LM Studio** – bez internetu
- Model odpowiada w czasie rzeczywistym (strumieniowo)
- Prompt napisany z humorem, ale z użyciem zaawansowanych funkcji
- Cały projekt jest **Open Source**

---

## License
The project is available as open source under the terms of the [MIT License](https://opensource.org/license/MIT)

## 🧡 Autor

Stworzony przez [@adamzagorski92](https://github.com/adamzagorski92)  
dla zabawy, testów prompt engineeringu i inspiracji dla społeczności.

Jeśli się uśmiechnąłeś — zostaw ⭐ na repo!  
Jeśli jesteś głodny... wiesz co robić. 🍕
