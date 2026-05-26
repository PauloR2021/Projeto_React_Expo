package com.paulo.ToDoList.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;


@Entity
@Table(name = "tarefas")
@Getter @Setter
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long idUsuario;

    private String nome;

    @Column(nullable = false)
    private String titulo;

    private String status;
    private Timestamp dataCriacao;

}
