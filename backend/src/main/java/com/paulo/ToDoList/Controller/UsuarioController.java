package com.paulo.ToDoList.Controller;

import com.paulo.ToDoList.Api.RetornoApi;
import com.paulo.ToDoList.Dtos.RequestUsuario;
import com.paulo.ToDoList.Dtos.ResponseUsuario;
import com.paulo.ToDoList.Service.UsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Usuário",description = "EndPoint dos usuários")
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private final UsuarioService  usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }



    @PostMapping
    @Operation(summary = "Endpoint para criar usuários",description = "Cria novos usuários")
    public ResponseEntity<RetornoApi<ResponseUsuario>> create (@RequestBody @Valid RequestUsuario request){
        ResponseUsuario response = usuarioService.save(request);

        RetornoApi<ResponseUsuario> apiResponse =
                new RetornoApi<>(true,"Usuário cadastrado",response);

        return ResponseEntity.ok(apiResponse);
    }
}
