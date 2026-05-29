package com.paulo.ToDoList.Controller;

import com.paulo.ToDoList.Api.RetornoApi;
import com.paulo.ToDoList.Dtos.Tarefa.RequestTarefa;
import com.paulo.ToDoList.Dtos.Tarefa.ResponseTarefa;
import com.paulo.ToDoList.Entity.Usuario;
import com.paulo.ToDoList.Service.TarefaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Tarefa",description = "EndPoint da  Tarefas")
@RestController
@RequestMapping("/tarefas")
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

    @GetMapping
    public ResponseEntity<RetornoApi<List<ResponseTarefa>>> findAllTarefas(){

        Usuario usuario = (Usuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        List<ResponseTarefa> response = tarefaService.findByTarefas(usuario.getId());

        RetornoApi<List<ResponseTarefa>> apiResponse =
                new RetornoApi<>(true,"Tarefas",response);

        return ResponseEntity.ok(apiResponse);
    }
}
