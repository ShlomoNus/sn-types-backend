# Setup for Team Members

This project uses **GitHub Packages** to distribute internal npm modules (e.g. `@ShlomoNus/sn-types-general`).  
GitHub Packages requires authentication **even for public packages**.  

Every team member must generate a **GitHub Personal Access Token (PAT)** and configure it once.  
This token will allow you to install all packages published under the `@ShlomoNus` scope.

---

## 1. Generate a Personal Access Token
1. Go to [GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens).  
2. Click **Generate new token (classic)**.  
3. Select **read:packages** (this is enough for installing).  
4. Copy the generated token (it starts with `ghp_...`).  

⚠️ **Do not share this token** — it is tied to your GitHub account.

---

## 2. Set the Token as an Environment Variable (Windows)

Open **PowerShell** and run:

```powershell
setx NPM_TOKEN "ghp_yourGeneratedTokenHere"
```

This saves the token permanently in your Windows environment variables.  
After running this, restart your terminal (or VS Code) so it picks up the new variable.

You can confirm it’s set with:

```powershell
echo $env:NPM_TOKEN
```

---

## 3. Verify Access

Run this command to test authentication:

```powershell
npm whoami --registry=https://npm.pkg.github.com
```

You should see your GitHub username.  

---

## 4. Install Dependencies

Now you can install project dependencies normally:

```powershell
npm install
```

npm will use the `NPM_TOKEN` automatically (thanks to the included `.npmrc`).

---

✅ **You only need to do this once**.  
The same token works for all packages under `@ShlomoNus/*`.  
