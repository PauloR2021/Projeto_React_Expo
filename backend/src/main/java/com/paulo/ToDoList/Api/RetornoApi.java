package com.paulo.ToDoList.Api;

import java.time.LocalDateTime;

public class RetornoApi <T> {
    private boolean sucesso;
    private String mensagem;
    private T data;
    private LocalDateTime timestamp;

    public RetornoApi(boolean sucesso, String mensagem, T data) {
        this.sucesso = sucesso;
        this.mensagem = mensagem;
        this.data = data;
        this.timestamp = LocalDateTime.now();
    }

    public boolean isSucesso() {
        return sucesso;
    }

    public void setSucesso(boolean sucesso) {
        this.sucesso = sucesso;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}

