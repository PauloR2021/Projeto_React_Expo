package com.paulo.ToDoList.Exceptions;


import com.paulo.ToDoList.Api.RetornoApi;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.util.List;


@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<RetornoApi<Void>> resourceNotFoundException(ResourceNotFoundException ex){
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new RetornoApi<>(false,ex.getMessage(),null));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<RetornoApi<Void>> methodArgumentNotValidException(MethodArgumentNotValidException ex){
        List<String> fieldErrors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage).toList();

        String mensagem = String.join(",", fieldErrors);

        return ResponseEntity
                .status(HttpStatus.METHOD_NOT_ALLOWED)
                .body(new RetornoApi<>(false, mensagem,null));
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<RetornoApi<Void>> runtimeException(RuntimeException ex){
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new RetornoApi<>(false,ex.getMessage(),null));
    }
}
