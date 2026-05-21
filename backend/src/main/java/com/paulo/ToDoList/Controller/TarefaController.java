package com.paulo.ToDoList.Controller;

import com.paulo.ToDoList.Api.RetornoApi;
import com.paulo.ToDoList.Dtos.Tarefa.RequestTarefa;
import com.paulo.ToDoList.Dtos.Tarefa.ResponseTarefa;
import com.paulo.ToDoList.Service.TarefaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Tarefa",description = "EndPoint da  Tarefas")
@RestController
@RequestMapping("/tarefa")
public class TarefaController {

    private final TarefaService tarefaService;

    public TarefaController(TarefaService tarefaService) {
        this.tarefaService = tarefaService;
    }

    @PostMapping
    public ResponseEntity<RetornoApi<ResponseTarefa>> create (@RequestBody @Valid RequestTarefa tarefa){
        ResponseTarefa response = tarefaService.create(tarefa);

        RetornoApi<ResponseTarefa> apiResponse =
                new RetornoApi<>(true,"Tarefa criada",response);

        return ResponseEntity.ok(apiResponse);
    }
}
