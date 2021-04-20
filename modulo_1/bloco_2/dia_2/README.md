Dinâmica e exercícios sobre gerenciamento de versão com git e github.

Instalação:

git-all
xclip (copy directly from shell)

Configuração:

Geração de chave SSH
Adição de chave SSH ao ssh-agent
Adição de chave SSH na conta do GitHub
Configuração de nome, email e editor de texto padrão do git

Comandos:

ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
git config --global core.editor "code --wait"
code .gitconfig

git init
git add .
git commit -m "message"
git push origin master
git remote add origin git remote add origin "URL_DO_REPOSITÓRIO"
git status

Semana 1. Dia 5.