package com.paulo.ToDoList.Controller;

import com.paulo.ToDoList.Api.RetornoApi;
import com.paulo.ToDoList.Dtos.RequestLogin;
import com.paulo.ToDoList.Dtos.ResponseUsuario;
import com.paulo.ToDoList.Service.UsuarioService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Auth",description = "EndPoint para login")
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UsuarioService  usuarioService;

    public AuthController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/login")
    public ResponseEntity<RetornoApi<ResponseUsuario>> login(@RequestBody @Valid RequestLogin request){
        ResponseUsuario response = usuarioService.login(request);

        RetornoApi<ResponseUsuario> apiResponse =
                new RetornoApi<>(true,"Login realizado com sucesso",response);

        return ResponseEntity.ok(apiResponse);
    }
}
