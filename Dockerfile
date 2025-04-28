# Etapa 1: Construção da aplicação Angular
FROM node:22 AS build

WORKDIR /app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Instala o Angular CLI globalmente
RUN npm install -g @angular/cli

# Copia o restante dos arquivos do projeto
COPY . .

# Gera a build da aplicação Angular
RUN ng build --configuration production

# Etapa 2: Servir a aplicação Angular com Nginx
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração personalizado do Nginx
COPY nginx.conf /etc/nginx/conf.d

# Copia os arquivos da build Angular para a pasta padrão do Nginx
COPY --from=build /app/dist/brasilsync/browser /usr/share/nginx/html

# Expondo a porta
EXPOSE 8084

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
